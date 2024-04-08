import PageTitle from "@/components/PageTitle";

export const metadata = {
   title: "Резиденти",
   description: "Резиденти",
};

export default function Layout({children}) {
   return (
      <>
         <PageTitle
            pageTitle='Резиденти'
            pagesub='Резиденти'
         />
         {children}
      </>
   );
}
