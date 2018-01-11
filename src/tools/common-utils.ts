/**
 * jiangyukun on 2018/1/10
 */

export function supportClassPre(classPre, className) {
  if (!classPre) {
    return className
  }
  return `${className} ${classPre}-${className}`
}
