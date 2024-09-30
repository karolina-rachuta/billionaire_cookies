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
            try {
                if (localCache.url) {
                    console.log('z cache')
                    setImage(localCache.url)
                } else {
                    const fetchedImage = await getImages();
                    console.log('Fetched image:', fetchedImage, image);
                }
            } catch (err) {
                console.error('Error fetching image:', err)
            }
        };
        fetchImage();
    }, []);

    const getImages = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "componentHeroBanner",
                select: "fields",
                order: "fields.internalName"
            });
            const imgUrlAddress = entries.items[0].fields.image.fields.file.url;
            if (localCache.url !== imgUrlAddress) {
                localCache.url = imgUrlAddress;
                console.log('fetched new url', localCache.url)
                setImage(localCache.url);
                return image;
            } else {
                setImage(localCache.url)
                console.log('using cache url', localCache.url)
                return image;
            }
        } catch (error) {
            throw new Error(`Error fetching background image: ${error.message}`)
        };
    }
    return [image];

};

export default useContentful;