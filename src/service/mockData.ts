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
    const mockDataResult = await this.mockDataModel.save(mockData);

    // save success
    console.log('mockData id = ', mockDataResult.id);
  }

  // find
  async findMockData(level1?: string) {
    let mockDataRes = await this.mockDataModel.findOne({
      level1,
    });
    console.info('mockDataRes-------service------', mockDataRes);
    return mockDataRes;
  }
}
