import {
  MOCKED_SIGNER_MAIN_ACCOUNT,
  MOCKED_SIGNER_SECOND_ACCOUNT,
  PEPE_LEDGER_CANISTER_ID,
} from "../../../constants"
import { CallCanisterMethod } from "./constants"
import { Section } from "./section"

export function Icrc2Transfer({ className }: { className?: string }) {
  return (
    <Section
      className={className}
      request={{
        method: "icrc49_call_canister",
        params: {
          canisterId: PEPE_LEDGER_CANISTER_ID,
          sender: MOCKED_SIGNER_SECOND_ACCOUNT,
          method: CallCanisterMethod.icrc2_transfer_from,
          arg: "RElETAZte24AbAKzsNrDA2ithsqDBQFufW54bAf7ygECxvy2AgPhhcGUAgHqyoqeBAK6ieXCBAGC8/ORDATYo4yoDX0BBQEdXdZAg85gOc3s6DkTiv7FBn9RDHSPT6rgmlsBGgIAAAABHddbvOJ4U2u2S79mR0+xkJBPtwHztu02la8/gFECAAAAgICA9d246+S1bA==",
        },
      }}
      getCodeSnippet={({ canisterId, method }) => `const agent = useAgent()
  
const actor = Actor.createActor(idlFactory, {
  agent,
  canisterId: "${canisterId}",
})
  
const myAcc = {
  owner: Principal.fromText("${MOCKED_SIGNER_MAIN_ACCOUNT}"), // mocked signer main account
  subaccount: [],
}

const toAcc = {
  owner: Principal.fromText("${MOCKED_SIGNER_SECOND_ACCOUNT}"), // mocked signer second account
  subaccount: [],
}

const icrc2_transfer_from_args = {
  spender_subaccount: [],
  from: myAcc,
  to: toAcc,
  amount: BigInt(1000 * 10 ** 18), // 1000 PEPE tokens
  fee: [],
  memo: [],
  created_at_time: []
}

const response = await actor.${method}(icrc2_transfer_from_args)`}
    />
  )
}
