import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import App from "../HomeScreenOnIphone";
import HomeScreenOnIphone from "../HomeScreenOnIphone";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/HomeScreenOnIphone">
                <HomeScreenOnIphone/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;