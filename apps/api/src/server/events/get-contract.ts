import { contractSchemaPayloadValidator } from '@app/server/core/validation'
import { EthVMServer, SocketEvent, SocketEventValidationResult } from '@app/server/ethvm-server'
import { Contract, Events } from 'ethvm-common'

const getContractEvent: SocketEvent = {
  id: Events.getContract,

  onValidate: (server: EthVMServer, socket: SocketIO.Socket, payload: any): SocketEventValidationResult => {
    const valid = contractSchemaPayloadValidator(payload) as boolean
    return {
      valid,
      errors: [] // TODO: Map properly the error
    }
  },

  onEvent: (server: EthVMServer, socket: SocketIO.Socket, payload: any): Promise<Contract | null> => server.contractsService.getContract(payload.address)
}

export default getContractEvent
