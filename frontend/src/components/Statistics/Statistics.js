import "./Statistics.css"
const Statistics = ()=>{
    return(
        <div className="stat-cards">
            <div className="stat-card">
                <div className="stat-header">
                    <h1>CI/CD Tools</h1>
                    <img src='https://crustlab.com/wp-content/uploads/2021/05/ic-gambling1.svg' alt='fav' />
                </div>
                <p>Jenkins, GitLab</p>
            </div>
            <div className="stat-card">
                <div className="stat-header">
                    <h1>Cloud Providers</h1>
                    <img src='https://crustlab.com/wp-content/uploads/2021/05/ic-emplo1.svg' alt='fav' />
                </div>
                <p>AWS, Azure, GCP</p>
            </div>
            <div className="stat-card">
                <div className="stat-header">
                    <h1>Infrastructure as Code</h1>
                    <img src='https://crustlab.com/wp-content/uploads/2021/05/ic-dev1.svg' alt='fav' />
                </div>
                <p>Terraform</p>
            </div>
            <div className="stat-card">
                <div className="stat-header">
                    <h1>Configuration Management</h1>
                    <img src='https://crustlab.com/wp-content/uploads/2021/05/ic-users-1.svg' alt='fav' />
                </div>
                <p>Ansible</p>
            </div>
            <div className="stat-card">
                <div className="stat-header">
                    <h1>Continuous Deployment</h1>
                    <img src='https://crustlab.com/wp-content/uploads/2021/05/ic-star.svg' alt='fav' />
                </div>
                <p>ArgoCD</p>
            </div>
           
            
        </div>
    )
}

export default Statistics;