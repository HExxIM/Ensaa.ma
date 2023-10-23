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
      };
  return (
    <div style={loadingStyles.flexContainer}>
        <Image src={loading}/>
    </div>
  )
}
