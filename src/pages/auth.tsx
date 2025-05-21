import BreadCrumbHeader from "@/components/breadcrumb-header";
import LoginForm from "@/components/login-form";
import RegisterForm from "@/components/register-form";

const config = {
  title: "ورود و ثبت نام",
  breadcrumbs: [
    {
      title: "خانه",
      href: "/"
    },
    {
      title: "ورود و ثبت نام",
      href: "/auth"
    },
  ]
}

export default function Auth() {
  return(
    <div className="flex flex-col gap-4">
      <BreadCrumbHeader title={config.title} breadcrumbs={config.breadcrumbs}/>
      <div className="flex flex-col items-center gap-4">
        <div className="bg-gray-500 rounded-full w-28 aspect-square"></div>
        <div className="flex flex-wrap w-full justify-center lg:divide-x-2 md:divide-x-2">
          <LoginForm />
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}