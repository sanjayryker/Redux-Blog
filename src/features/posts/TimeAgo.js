import { parseISO, formatDistanceToNow  } from "date-fns";


const TimeAgo = ({time}) => {

    let timeAgo = ''
    if(time) {
        const date = parseISO(time)
        const timePeriod  = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
    }
  return (
    <span title={time}>
      <i> {timeAgo}</i>
    </span>
  )
}

export default TimeAgo