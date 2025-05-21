import { Link } from "react-router-dom";

interface BreadCrumbs {
  title: string,
  href: string,
}

interface BreadCrumbHeaderProps {
  title: string,
  breadcrumbs: BreadCrumbs[]
}

export default function BreadCrumbHeader({title, breadcrumbs}: BreadCrumbHeaderProps) {
  return(
    <div className="flex flex-col gap-4 rounded-md h-44 justify-center items-center bg-gray-500">
      <h1 className="text-3xl">{title}</h1>
      <div className="flex px-2">
        {
          breadcrumbs.map((breadcrumb,i) => {
            return(
                <Link 
                to={breadcrumb.href} 
                className={i == breadcrumbs.length - 1 ? "text-white" : "text-blue-500"}>
                {breadcrumb.title}<span className={`text-white ${i == breadcrumbs.length - 1 && "hidden"}`}>/</span>
                </Link>
            )
          })
        }
      </div>
    </div>
  );
}