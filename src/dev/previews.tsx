import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import App from "../HomeScreenMobile";
import HomeScreenMobile from "../HomeScreenMobile";


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
        </Previews>
    );
};

export default ComponentPreviews;