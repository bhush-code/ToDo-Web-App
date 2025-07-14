export const Footer = () => {
    const year = new Date().getFullYear();
    const companyName = "Bhush Technologies";

    console.log("Footer component rendered");
    return (

        <p className="footer">CopyRight @ {companyName} {year} </p>
    )
}