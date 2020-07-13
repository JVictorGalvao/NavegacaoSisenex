import { StackNavigationProp } from "@react-navigation/stack"
import { RouteProp } from "@react-navigation/native"

export type ParamList = {
  Login: undefined
  RegistroApresentacao: undefined
  RegistroApresentacaoInput: undefined
  PessoasApresentacao: undefined
  RegistroPessoa:undefined
  RegistroPessoaInput:undefined
  MonitorTabs: undefined
  ProjetosApresentacao:undefined
  GerenciarProjeto:undefined
  Apresentacao: undefined
  ReportarProblema:undefined
}

export type NavProps<T extends keyof ParamList> = {
  navigation: StackNavigationProp<ParamList, T>;
  route: RouteProp<ParamList, T>
}

export type MonitorParamList = {
  RegistroApresentacao: undefined
  RegistroApresentacaoInput: undefined
  PessoasApresentacao: undefined
  RegistroPessoa:undefined
  RegistroPessoaInput:undefined
  MonitorTabs: undefined
  ProjetosApresentacao:undefined
  GerenciarProjeto:undefined
  Apresentacao: undefined
  ReportarProblema:undefined
  RegistroApresentacaoStack: undefined
  MonitorTabStack: undefined
}

export type AvaliadorParamList = {
  Tela1: undefined
  Tela2: undefined
  Tela3: undefined
}