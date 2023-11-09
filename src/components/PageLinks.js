import { pageLinks } from '../data'
import PageLink from './PageLink'
const PageLinks = ({parentClass, childClass}) => {
  return (
    <ul className={parentClass} id="nav-links">
          {
            pageLinks.map((pageLink) => {
              return (
                <PageLink key={pageLink.id} childClass={childClass} pageLink={pageLink}/>
              )
            })
          }
    </ul>
  )
}
export default PageLinks