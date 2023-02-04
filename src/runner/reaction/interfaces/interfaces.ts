import { IConfigMeta, IReactionMeta } from "./metas"

export type Unsubscribe = () => void

export interface IHandlerArgs {
  inputValue?: any,
  context?: any
}

export type InputHandler = (args?: IHandlerArgs) => void

export interface IJointer {
  id: string,
  flowIn: InputHandler,
  connect: (handler: InputHandler) => void
  disconnect: (handler: InputHandler) => void
}

export type Jointers = {
  [name: string]: IJointer | undefined
}

export interface IReaction {
  id: string
  inputs: Jointers
  outputs: Jointers
}
export type Reactions = {
  [id: string]: IReaction | undefined
}

export type VariableListener = (value: any) => void
export type PropsListener = (name: string, value: any) => void
export type UnListener = () => void

export type InputFunc = (inputValue?: any) => void
export type EventFuncs = {
  [name: string]: InputFunc | undefined
}

export interface IComponentController {
  id: string,
  name?: string,

  events: EventFuncs,
  initEvent?: InputFunc,
  destoryEvent?: InputFunc,
  reactions: Reactions,
  setVariable(name: string, value: any): void,
  subcribeToVariableChange(name: string, listener: VariableListener): UnListener
  subscribeToPropsChange(listener: PropsListener): UnListener
}

export type ComponentControllers = {
  [id: string]: IComponentController | undefined
}

export type ReactionFactory = (controllers: ComponentControllers, meta: IReactionMeta<IConfigMeta>) => IReaction
