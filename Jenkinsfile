pipeline {
    agent any

    stages {
        stage('clone from git') {
            steps {
                cleanWs()
                git branch: 'docker3',
                credentialsId: 'github-private-openssh-key',
                url: 'git@github.com:s-sosnovsky/automated-testing-mentoring-program-advanced.git'
            }
        }

        stage('sonarqube scan') {
            steps {
                script {
                    scannerHome = tool 'sonar-scanner'
                    withSonarQubeEnv('sonar') {
                        bat "${tool('sonar-scanner')}/bin/sonar-scanner -Dsonar.projectKey=automated-testing-mentoring-program-advanced"
                    }
                }
            }
        }

        stage('build docker image') {
            steps {
                  script {
                    bat 'docker build --no-cache -t dockerizedapp .'
                }
            }
        }
        
        stage('run tests in docker') {
            steps {
                  script {
                    bat 'docker-compose -f .\\docker-compose-selenium.yml up -d --remove-orphans '
                    sleep(1)
                    bat 'docker run -v ./temp:/app dockerizedapp npm test'
                    sleep(1)
                    bat 'docker-compose -f .\\docker-compose-selenium.yml down'
                }
            }
        }
        
        stage('allure-report') {
            steps {
                script {
                        powershell """
                        Copy-Item  \\\\wsl\$\\docker-desktop-data\\version-pack-data\\community\\docker\\volumes\\temp\\_data\\allure-results -Destination C:\\Users\\Sergey_Sosnovsky\\.jenkins\\workspace\\automated-testing-mentoring-program-advanced\\ -Recurse
                        """
                        sleep(1)
                        allure includeProperties: false, jdk: '', results: [[path: "allure-results"]]
                }
            }
        }
    }
}
