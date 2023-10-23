import Image from "next/image";
import loading from '../public/loading.svg'

export default function Loading() {
    const loadingStyles = {
        flexContainer: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        },
        // svg: {
        //   width: '100px',
        //   height: '80px',
        //   marginRight: '2px',
        //   fill: 'white',
        // },
      };
  return (
    <div style={loadingStyles.flexContainer}>
        <Image src={loading}/>
    </div>
  )
}
