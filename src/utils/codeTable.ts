/* 基础数据映射表管理 */

const fixTable: ITable[] = [
  {
    name: 'gender',
    list: [
      { id: 1, name: '男' },
      { id: 2, name: '女' }
    ]
  }
]

// 表名。方便使用的时候调用
const TABLE_NAME_MAP = {
  gender: 'gender',
  role: 'role',
  region: 'region',
  article: 'article'
}

interface IItem {
  id: number
  name: string
}

interface ITable {
  name: string
  list: IItem[]
}

export class CodeTable {
  public tableNameMap = {}

  private data: ITable[] = []

  constructor(data: ITable[]) {
    this.tableNameMap = TABLE_NAME_MAP
    this.data = data
  }

  /**
   * 手动初始化
   * **可用于从后端获取数据后，进行追加**
   */
  public initTable(data: ITable[]) {
    const newData = [...this.data, ...data]
    this.data = newData
  }

  /**
   * 获取某个表
   * @param {String} tableName 表名
   */
  public getTable(tableName: string) {
    const table = this.data.find((item) => item.name === tableName)
    if (table) {
      return table
    } else {
      const newTable: ITable = {
        name: tableName,
        list: [
          {
            id: 9000,
            name: tableName + '.ID-1'
          },
          {
            id: 9001,
            name: tableName + '.ID-2'
          }
        ]
      }
      return newTable
      // throw new Error(`表“${tableName}”不存在`);
    }
  }

  /**
   * 获取某个表的所有项的id
   * @param {String} tableName 表名
   */
  public getIds(tableName: string) {
    const table = this.getTable(tableName)
    return table.list.map((item) => item.id)
  }

  /**
   * 获取某个表的所有项的name
   * @param {String} tableName 表名
   */
  public getNames(tableName: string) {
    const table = this.getTable(tableName)
    return table.list.map((item) => item.name)
  }

  /**
   * 获取某个表中某一项的名称
   * @param {String} tableName 表名
   * @param {Number} id
   */
  public getNameById(tableName: string, id: number) {
    const table = this.getTable(tableName)
    const result = table.list.find((item) => item.id === id)
    return result ? result.name : ''
  }

  /**
   * 根据id列表获取名称列表
   * @param {String} tableName 表名
   * @param {Array} ids
   */
  public getNamesByIds(tableName: string, ids: number[]) {
    const table = this.getTable(tableName)
    const names: string[] = []
    table.list.forEach((item) => {
      if (ids.includes(item.id)) {
        names.push(item.name)
      }
    })
    return names
  }

  /**
   * 格式化为指定的数据结构
   * ** 比如有的地方使用value,label **
   */
  public formatTable(tableName: string, idFiled: string, nameFiled: string) {
    const table = this.getTable(tableName)
    return table.list.map((item) => ({
      [idFiled]: item.id,
      [nameFiled]: item.name
    }))
  }
}

export default new CodeTable(fixTable)
