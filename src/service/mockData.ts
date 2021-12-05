import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { MockData } from '../entity/mockData';
import { Repository } from 'typeorm';

@Provide()
export class MockDataService {
  @InjectEntityModel(MockData)
  mockDataModel: Repository<MockData>;

  // save
  async saveMockData(
    level1?: string,
    level2?: string,
    level3?: string,
    level4?: string,
    level5?: string,
    level6?: string,
    res_data?: string
  ) {
    // create a entity object
    let mockData = new MockData();
    mockData.level1 = level1;
    mockData.level2 = level2;
    mockData.level3 = level3;
    mockData.level4 = level4;
    mockData.level5 = level5;
    mockData.level6 = level6;
    mockData.res_data = res_data;
    // save entity
    await this.mockDataModel.save(mockData);
    // const mockDataResult = await this.mockDataModel.save(mockData);

    // save success
    // console.log('mockData id = ', mockDataResult.id);
  }

  // update
  async deleteMockData(id?: number) {
    // console.info('id--------------', id);
    let mockDataToRemove = await this.mockDataModel.findOne(id);
    await this.mockDataModel.remove(mockDataToRemove);
  }

  // update
  async updateMockData(id?: number, res_data?: string) {
    // console.info('id--------------', id);
    let mockDataToUpdate = await this.mockDataModel.findOne(id);
    // console.info('mockDataToUpdate--------------', mockDataToUpdate);
    mockDataToUpdate.res_data = res_data;

    await this.mockDataModel.save(mockDataToUpdate);
  }

  // findAll
  async findAllMockData() {
    let allMockDataRes = await this.mockDataModel.find();
    // console.info('mockDataRes-------findMockData1------', allMockDataRes);
    return allMockDataRes;
  }

  // find1
  async findMockData1(level1: string) {
    let mockDataRes = await this.mockDataModel.findOne({
      level1,
    });
    // console.info('mockDataRes-------findMockData1------', mockDataRes);
    return mockDataRes;
  }

  // find2
  async findMockData2(level1: string, level2: string) {
    let mockDataRes = await this.mockDataModel.findOne({
      level1,
      level2,
    });
    // console.info('mockDataRes-------findMockData2------', mockDataRes);
    return mockDataRes;
  }

  // find3
  async findMockData3(level1: string, level2: string, level3: string) {
    let mockDataRes = await this.mockDataModel.findOne({
      level1,
      level2,
      level3,
    });
    // console.info('mockDataRes-------findMockData3------', mockDataRes);
    return mockDataRes;
  }

  // find4
  async findMockData4(
    level1: string,
    level2: string,
    level3: string,
    level4: string
  ) {
    let mockDataRes = await this.mockDataModel.findOne({
      level1,
      level2,
      level3,
      level4,
    });
    // console.info('mockDataRes-------findMockData4------', mockDataRes);
    return mockDataRes;
  }

  // find
  async findMockDataById(id?: number) {
    let mockDataRes = await this.mockDataModel.findOne({
      id,
    });
    // console.info('mockDataRes-------service------', mockDataRes);
    return mockDataRes;
  }
}
