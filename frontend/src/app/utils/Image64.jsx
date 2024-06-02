import fs from 'fs';
import path from 'path';
    
const Image64 = ({ src, alt, width, height }) => {
      let startTime = performance.now()
      const imagePath = path.join(process.cwd(),  src);
    
      try {
        const ext = path.extname(imagePath).slice(1);
        console.log(ext)
        const image = fs.readFileSync(imagePath, 'base64');
        const imageUrl = `data:image/${ext};base64,${image}`;
        let endTime = performance.now()
    
        console.log(`reading the image took ${endTime - startTime} milliseconds`) // to test the time takes to render the image ===> between 0.2xx milliseconds and 1,xx second.
        
        return <img src={imageUrl} alt={alt} width={width} height={height} />;
      } catch (error) {
        console.error('Error reading image file:', error);
        return null;
      }
    };

export default Image64;