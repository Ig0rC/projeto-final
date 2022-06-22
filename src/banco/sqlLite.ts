import * as SQLite from 'expo-sqlite';
import {
  ResultSet, ResultSetError, SQLResultSet,
} from 'expo-sqlite';
import { v4 as uuidv4 } from 'uuid';

// descrevendo a estrutura dos contatos
interface iCreate {
  nome: string;
  sobrenome: string;
  ddd: string;
  telefone: string;
}

// Criando uma class para trabalhar com o SQLITE
class DatabaseConfiguration {
  // abrindo um banco chamado agenda
  public readonly databaseOpen = SQLite.openDatabase('agenda');

  // sql inicial da tabela
  private readonly sqlInit: string[] = [
    'DROP TABLE IF EXISTS agenda;',

    `CREATE TABLE IF NOT EXISTS agenda(
      id text, 
      nome text,
      sobrenome text, 
      ddd text, 
      telefone text
    );`,
  ];

  // metodo para criar o contato
  public create({
    nome, sobrenome, ddd, telefone
  }: iCreate) {
    this.databaseOpen.transaction((db: SQLite.SQLTransaction) => {
      db.executeSql(`
        insert into agenda(id, nome, sobrenome, ddd, telefone)
        values(?, ?, ?, ?, ?);`, [
        uuidv4(), nome, sobrenome,ddd, telefone
      ]);
    });
  }

  // metodo para buscar todos os contatos
  public findAll() {
    return new Promise<any>(
      (resolve) => this.databaseOpen.exec([{
        sql: 'SELECT * FROM agenda ORDER BY nome',
        args: [],
      }], true, (error?: Error | null, resultSet?: (ResultSetError | ResultSet)[]) => {
        if (resultSet !== undefined && resultSet.length > 0) {
          resolve(resultSet);
        }
      }),
    );
  }


  // metodo para buscar unico contato
  public buscar(id: string) {
    return new Promise<any>(
      (resolve) => this.databaseOpen.exec([{
        sql: 'SELECT * FROM agenda WHERE id = ?',
        args: [id],
      }], true, (error?: Error | null, resultSet?: (ResultSetError | ResultSet)[]) => {
        if (resultSet !== undefined && resultSet.length > 0) {
          resolve(resultSet);
        }
      }),
    );
  }
  
  // metodo para atualizar unico contato
  public atualizar(id: string, nome: string, sobrenome: string, ddd: string, telefone: string) {
    return new Promise<any>(
      (resolve) => this.databaseOpen.transaction((db: SQLite.SQLTransaction) => {
        db.executeSql(`
          UPDATE agenda SET nome = ?, sobrenome = ?, ddd = ?, telefone = ? WHERE id = ?
        ;
      `, [nome, sobrenome, ddd, telefone, id], (_, result: SQLResultSet) => {
          resolve(result.rows);
        });
      }),
    );
  }

  
  // metodo para apagar o contato
  public delete(id: string) {
    return new Promise<any>(
      (resolve) => this.databaseOpen.transaction((db: SQLite.SQLTransaction) => {
        db.executeSql(`
        DELETE FROM agenda
        WHERE id = ?;
      `, [id], (_, result: SQLResultSet) => {
          resolve(result.rows);
        });
      }),
    );
  }

  // metodo para start o banco de dados
  public startDatabase() {
    this.databaseOpen.transaction((db: SQLite.SQLTransaction) => {
      this.sqlInit.forEach((value) => {
        db.executeSql(value);
      });
    });
  }
}

export default new DatabaseConfiguration();
