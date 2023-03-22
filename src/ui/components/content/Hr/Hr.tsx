interface HrProps {
  hello: string
}

const Hr = ({ hello }: HrProps) => {
  return <hr className='h-px border-none bg-surface-200' />
}

export default Hr
