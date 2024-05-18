import { BigInt } from "@graphprotocol/graph-ts"
import { AllowanceRenewed as AllowanceRenewedEvent, CoinsSpent as CoinsSpentEvent } from "../generated/WalletContract/WalletContract"
import { Wallet, Allowance, Transaction } from "../generated/schema"

export function handleAllowanceRenewed(event: AllowanceRenewedEvent): void {
  let wallet = Wallet.load(event.address.toHex())
  if (wallet == null) {
    wallet = new Wallet(event.address.toHex())
    wallet.owner = event.address
    wallet.balance = BigInt.fromI32(0) // Initialize balance if required
  }
  wallet.save()

  let allowance = new Allowance(event.transaction.hash.toHex())
  allowance.wallet = wallet.id
  allowance.user = event.params.user
  allowance.allowance = event.params.allowance
  allowance.timeLimit = event.params.timeLimit
  allowance.save()
}

export function handleCoinsSpent(event: CoinsSpentEvent): void {
  let wallet = Wallet.load(event.address.toHex())
  if (wallet == null) {
    wallet = new Wallet(event.address.toHex())
    wallet.owner = event.address
    wallet.balance = BigInt.fromI32(0) // Initialize balance if required
  }
  wallet.save()

  let transaction = new Transaction(event.transaction.hash.toHex())
  transaction.wallet = wallet.id
  transaction.receiver = event.params.receiver
  transaction.amount = event.params.amount
  transaction.timestamp = event.block.timestamp
  transaction.save()
}
