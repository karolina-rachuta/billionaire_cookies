import {
    React,
    useState,
    useEffect
} from "react";
import {
    createClient
} from "contentful";


const localCache = {};

const useContentful = () => {
    const [image, setImage] = useState("");

    const client = createClient({
        space: process.env.REACT_APP_space_id,
        accessToken: process.env.REACT_APP_contentPreviewApi,
    });

    useEffect(() => {
        const fetchImage = async () => {
            if (localCache.url) {
                setImage(localCache.url);
                console.log('z cache', localCache.url);
            } else {
                const fetchedImage = await getImages();
                setImage(fetchedImage);
                console.log('z fetcha', fetchedImage);
            }
        };

        fetchImage();
    }, [image]);


    const getImages = async () => {
        try {
            let urlAddress;
            const entries = await client.getEntries({
                content_type: "componentHeroBanner",
                select: "fields",
                order: "fields.internalName"
            });
            urlAddress = entries.items[0].fields.image.fields.file.url;
            if (localCache.url !== urlAddress) {
                console.log(urlAddress)
                localCache.url = urlAddress;
                console.log(localCache.url)
                return urlAddress;
            } else {
                console.log('url z cache', localCache.url)
                return localCache.url;
            }

        } catch (error) {
            console.log(`Error fetching background image: ${error}`)
        };
    }
    return [image];

};

export default useContentful;