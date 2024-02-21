import { Link } from "react-router-dom";
import Button from "./button";

const CTA = () => {
  return (
    <section className='cta '>
      <p className='cta-text blue-gradient_text'>
        Have a project in mind? <br className='sm:block hidden' />
        Let’s build something together!
      </p>
      <Link to='/contact' className='btn'>
        <Button label={'Contact'} centered={true}/>
      </Link>
    </section>
  );
};

export default CTA;