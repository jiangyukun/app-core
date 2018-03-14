/**
 * jiangyukun on 2018/1/11
 */
interface BaseFormProperties {
  name?: string
  required?: boolean
  disabled?: boolean
  value: string
  onChange: (value: string) => void
  classPre?: string
}

interface RequiredFormProperties {
  name?: string
  disabled?: boolean
  value: string
  onChange: (value: string) => void
  classPre?: string
}

export {BaseFormProperties, RequiredFormProperties}
