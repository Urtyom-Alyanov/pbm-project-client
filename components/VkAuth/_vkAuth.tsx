import * as uuid from "uuid";
import { useEffect } from "react";

export type VkAuthWidgetProps = vk.OpenAPI.Widgets.AuthOptions & {
    id?: string;
};

const _vkAuth: React.FC<VkAuthWidgetProps> = ({ id, children, ...props }) => {
    VK.init({
        apiId: 7800370
    });
    const idAuth = id || "vk_auth" + uuid.v4();
    useEffect(() => {
        VK.Widgets.Auth(idAuth, props);
    }, []);
    return <div id={idAuth}></div>;
};

export default _vkAuth;