import { sendAndWait } from '../utils/handlers'
import * as Channel from 'shared/constants/Channel'

export default (args) => {
  return sendAndWait(Channel.DOWNLOAD, args)
}
