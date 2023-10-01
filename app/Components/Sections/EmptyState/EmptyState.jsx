import Image from 'next/image';

//svg

export default function EmptyState() {
    const EmptyStateStyles = {
        container:{
            height: "100vh",
            padding: "7% 5% 2% 5%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white"
        },
        p:{
            fontSize: "3rem",
            fontWeight: "200",
        }
    }
  return (
    <div style={EmptyStateStyles.container}>
        <Image  alt="Empty State"/>
        <p style={EmptyStateStyles.p}>Oops</p>
        <p style={EmptyStateStyles.p}>There's nothing here, yet</p>
    </div>
  )
}
