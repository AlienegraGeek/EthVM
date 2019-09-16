import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm'
import { assignClean } from '@app/shared/utils'
import { BigNumberTransformer } from '@app/orm/transformers/big-number.transformer'
import { BigNumber } from 'bignumber.js'
import { DateTransformer } from '@app/orm/transformers/date.transformer'

@Entity('block_metrics_header')
export class BlockMetricsHeaderEntity {

  constructor(data: any) {
    assignClean(this, data)
  }

  @PrimaryColumn({ type: 'numeric', readonly: true, transformer: new BigNumberTransformer() })
  number!: BigNumber

  @Column({ type: 'char', length: 66, unique: true, readonly: true })
  hash!: string

  @Column({ type: 'timestamp', readonly: true, transformer: new DateTransformer() })
  timestamp!: Date

  @Column({ type: 'int', readonly: true })
  blockTime?: number

  @Column({ type: 'int', readonly: true })
  numUncles!: number

  @Column({ type: 'numeric', readonly: true, transformer: new BigNumberTransformer() })
  difficulty!: BigNumber

  @Column({ type: 'numeric', readonly: true, transformer: new BigNumberTransformer() })
  totalDifficulty!: BigNumber

  @Column({ type: 'numeric', readonly: true, transformer: new BigNumberTransformer() })
  avgGasLimit!: BigNumber

  @Column({ type: 'numeric', readonly: true, transformer: new BigNumberTransformer() })
  avgGasPrice!: BigNumber

}
