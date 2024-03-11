import { Test, TestingModule } from '@nestjs/testing'
import { EnvConfigService } from './env-config.service'
import { EnvConfigModule } from './env-config.module'

describe('EnvConfigService Unit', () => {
  let sut: EnvConfigService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EnvConfigModule.forRoot()],
      providers: [EnvConfigService],
    }).compile()

    sut = module.get<EnvConfigService>(EnvConfigService)
  })

  it('should be defined', () => {
    expect(sut).toBeDefined()
  })

  it('should return the number port', () => {
    expect(sut.getPort()).toBe(3000)
  })

  it('should return the env node', () => {
    expect(sut.getNodeEnv()).toBe('test')
  })
})
