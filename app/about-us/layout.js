import PageTitle from "@/components/PageTitle";

export const metadata = {
   title: "Про нас",
   description: "Про нас",
};

export default function Layout({children}) {
   return (
      <>
         <PageTitle
            pageTitle='ПРО НАС'
            pagesub='Про нас'
         />
         {children}
      </>
   );
}
