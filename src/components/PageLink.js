const PageLink = ({pageLink, childClass}) => {
  return (
    <li key={pageLink.id}>
        <a href= {pageLink.href} className={childClass}> {pageLink.text} </a>
    </li>
  )
}
export default PageLink