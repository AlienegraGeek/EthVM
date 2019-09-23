import { Column, Entity, PrimaryColumn } from 'typeorm'
import { assignClean } from '@app/shared/utils'
import { BigNumberTransformer } from '@app/orm/transformers/big-number.transformer'
import BigNumber from 'bignumber.js'

@Entity('token_detail')
export class TokenDetailEntity {

  constructor(data: any) {
    assignClean(this, data);
  }

  @PrimaryColumn({ type: 'character', length: 42, readonly: true })
  address!: string

  @Column({ type: 'character', length: 42, readonly: true })
  creator?: string

  @Column({ type: 'varchar', length: 32, readonly: true })
  contractType?: string

  @Column({ type: 'numeric', readonly: true, transformer: new BigNumberTransformer() })
  createdAtBlockNumber!: BigNumber

  @Column({type: 'character varying', length: 64, readonly: true})
  name?: string

  @Column({type: 'character varying', length: 64, readonly: true})
  symbol?: string

  @Column({type: 'integer', readonly: true})
  decimals?: number

  @Column({type: 'text', readonly: true})
  logo?: string

  @Column({type: 'text', readonly: true})
  support?: string

  @Column({type: 'text', readonly: true})
  social?: string

  @Column({type: 'character varying', length: 256, readonly: true})
  website?: string

  @Column({ type: 'numeric', readonly: true, transformer: new BigNumberTransformer() })
  currentPrice?: BigNumber

  @Column({ type: 'numeric', readonly: true, transformer: new BigNumberTransformer() })
  circulatingSupply?: BigNumber

  @Column({ type: 'numeric', readonly: true, transformer: new BigNumberTransformer() })
  totalSupply?: BigNumber

  @Column({ type: 'numeric', readonly: true, transformer: new BigNumberTransformer() })
  marketCap?: string

  @Column({ type: 'numeric', readonly: true, transformer: new BigNumberTransformer() })
  priceChangePercentage24h?: BigNumber

  @Column({ type: 'numeric', readonly: true, transformer: new BigNumberTransformer() })
  totalVolume?: BigNumber

  @Column({ type: 'character varying', length: 64, readonly: true })
  terSymbol?: string

  @Column({ type: 'character varying', length: 64, readonly: true })
  terName?: string

  @Column({ type: 'text', readonly: true })
  image?: string

  @Column({ type: 'character varying', length: 64, readonly: true })
  cmName?: string

  @Column({ type: 'character varying', length: 64, readonly: true })
  cmSymbol?: string

  @Column({ type: 'integer', readonly: true })
  cmDecimals?: number

  @Column({ type: 'numeric', readonly: true, transformer: new BigNumberTransformer() })
  cmTotalSupply?: BigNumber

}
