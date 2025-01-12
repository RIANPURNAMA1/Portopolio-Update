interface HeaderSectionProps {
    children: React.ReactNode
}

export default function HeaderSection( { children } : HeaderSectionProps ) {
  return (
    <div className="my-10 text-white  text-center flex justify-center">
        {children}
    </div>
  )
}
