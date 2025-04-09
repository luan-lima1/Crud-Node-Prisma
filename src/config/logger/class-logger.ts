import logger from './index';

export function createClassLogger(className: string) {
  return logger.child({ class: className });
}
