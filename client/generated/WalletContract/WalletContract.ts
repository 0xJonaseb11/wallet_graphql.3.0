// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class AllowanceRenewed extends ethereum.Event {
  get params(): AllowanceRenewed__Params {
    return new AllowanceRenewed__Params(this);
  }
}

export class AllowanceRenewed__Params {
  _event: AllowanceRenewed;

  constructor(event: AllowanceRenewed) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get allowance(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get timeLimit(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class CoinsSpent extends ethereum.Event {
  get params(): CoinsSpent__Params {
    return new CoinsSpent__Params(this);
  }
}

export class CoinsSpent__Params {
  _event: CoinsSpent;

  constructor(event: CoinsSpent) {
    this._event = event;
  }

  get receiver(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class WalletContract__usersResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: Address, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getUserAddress(): Address {
    return this.value0;
  }

  getAllowance(): BigInt {
    return this.value1;
  }

  getValidity(): BigInt {
    return this.value2;
  }
}

export class WalletContract extends ethereum.SmartContract {
  static bind(address: Address): WalletContract {
    return new WalletContract("WalletContract", address);
  }

  getWalletBalance(): BigInt {
    let result = super.call(
      "getWalletBalance",
      "getWalletBalance():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_getWalletBalance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getWalletBalance",
      "getWalletBalance():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  myAllowance(): BigInt {
    let result = super.call("myAllowance", "myAllowance():(uint256)", []);

    return result[0].toBigInt();
  }

  try_myAllowance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("myAllowance", "myAllowance():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  users(param0: Address): WalletContract__usersResult {
    let result = super.call(
      "users",
      "users(address):(address,uint256,uint256)",
      [ethereum.Value.fromAddress(param0)],
    );

    return new WalletContract__usersResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt(),
    );
  }

  try_users(param0: Address): ethereum.CallResult<WalletContract__usersResult> {
    let result = super.tryCall(
      "users",
      "users(address):(address,uint256,uint256)",
      [ethereum.Value.fromAddress(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new WalletContract__usersResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBigInt(),
      ),
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class RenewAllowanceCall extends ethereum.Call {
  get inputs(): RenewAllowanceCall__Inputs {
    return new RenewAllowanceCall__Inputs(this);
  }

  get outputs(): RenewAllowanceCall__Outputs {
    return new RenewAllowanceCall__Outputs(this);
  }
}

export class RenewAllowanceCall__Inputs {
  _call: RenewAllowanceCall;

  constructor(call: RenewAllowanceCall) {
    this._call = call;
  }

  get _user(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _allowance(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _timeLimit(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class RenewAllowanceCall__Outputs {
  _call: RenewAllowanceCall;

  constructor(call: RenewAllowanceCall) {
    this._call = call;
  }
}

export class SpendCoinsCall extends ethereum.Call {
  get inputs(): SpendCoinsCall__Inputs {
    return new SpendCoinsCall__Inputs(this);
  }

  get outputs(): SpendCoinsCall__Outputs {
    return new SpendCoinsCall__Outputs(this);
  }
}

export class SpendCoinsCall__Inputs {
  _call: SpendCoinsCall;

  constructor(call: SpendCoinsCall) {
    this._call = call;
  }

  get _receiver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SpendCoinsCall__Outputs {
  _call: SpendCoinsCall;

  constructor(call: SpendCoinsCall) {
    this._call = call;
  }
}