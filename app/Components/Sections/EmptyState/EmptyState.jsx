import Image from 'next/image';

//Images
import emptyStateIllustration from '../../../../public/images/emptyStateIllustration.webp'

export default function EmptyState() {
    const EmptyStateStyles = {
        container:{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white"
        },
        p:{
            fontSize: "2.2rem",
            fontWeight: "200",
        }
    }
  return (
    <div style={EmptyStateStyles.container}>
        <Image src={emptyStateIllustration} alt="Empty State"/>
        <p style={EmptyStateStyles.p}>Oops</p>
        <p style={EmptyStateStyles.p}>There's nothing here, yet</p>
    </div>
  )
}
