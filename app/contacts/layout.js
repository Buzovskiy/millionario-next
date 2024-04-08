import PageTitle from "@/components/PageTitle";

export const metadata = {
   title: "Контакти",
   description: "Контакти",
};

export default function Layout({children}) {
   return (
      <>
         <PageTitle
            pageTitle='Контакти'
            pagesub='Контакти'
         />
         {children}
      </>
   );
}
