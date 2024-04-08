'use client';


const ButtonForEvent = () => {
   return (
      <a className="epts-cb-green2 tfe-embed-popup"
         data-alias="biznes-forum-01-10-23"
         data-lang="uk"
         target="_blank"
         href="https://biznes-forum-01-10-23.ticketforevent.com/uk/?noredirect">
         Купити квиток
      </a>
   )
}

const ButtonForEvent20231121 = (props) => {
   if (props.admin_telegram_link === true) {
      const tel_link = `${process.env.REACT_APP_ADMIN_TELEGRAM_LINK}`
      return (
         <a className="gauto-btn gauto-btn__event-3"
            target='_blank'
            href={tel_link}>
            Стати партнером
         </a>
      )
   } else {
      return (
         <a className="gauto-btn epts-cb-green2 tfe-embed-popup gauto-btn__event-3"
            data-alias="forum-millionario-alicante-08-11-23"
            data-lang="uk"
            target="_blank"
            href="https://forum-millionario-alicante-08-11-23.ticketforevent.com/uk/">
            Купити квиток
         </a>
      )
   }
}

export default ButtonForEvent;
export {ButtonForEvent20231121};