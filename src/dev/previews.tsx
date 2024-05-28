import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import App from "../HomeScreenMobile";
import HomeScreenMobile from "../HomeScreenMobile";
import TopBar from "../Components/TopBar";
import HamburgerMenuContent from "../Components/HamburgerMenuContent";


const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/HomeScreenMobile">
                <HomeScreenMobile/>
            </ComponentPreview>
            <ComponentPreview path="/HomeScreenOnIphone">
                <HomeScreenMobile/>
            </ComponentPreview>
            <ComponentPreview path="/TopBar">
                <TopBar/>
            </ComponentPreview>
            <ComponentPreview path="/HamburgerMenuContent">
                <HamburgerMenuContent/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;