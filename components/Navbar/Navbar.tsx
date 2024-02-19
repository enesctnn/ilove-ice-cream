import MaxWidthWrapper from '../MaxWidthWrapper';
import NavItems from './NavItems';
import NavbarAnimationWrapper from './NavbarAnimationWrapper';

function Navbar() {
  return (
    <NavbarAnimationWrapper>
      <header>
        <MaxWidthWrapper>
          <NavItems />
        </MaxWidthWrapper>
      </header>
    </NavbarAnimationWrapper>
  );
}

export default Navbar;
