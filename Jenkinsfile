pipeline {
    agent any

    options {
        skipDefaultCheckout(true)
    }
    stages {
        stage('Clone SCM for sonar') {
            steps {
                cleanWs()
                git branch: 'hometask1',
          credentialsId: '4f4087e3-4400-48ce-8d7e-cde888eb1536',
          url: 'git@github.com:s-sosnovsky/automated-testing-mentoring-program-advanced.git'
            }
        }
        stage('SonarQube analysis') {
            steps {
                script {
                    scannerHome = tool 'sonar-scanner'
                    withSonarQubeEnv('sonar') {
                        bat "${tool('sonar-scanner')}/bin/sonar-scanner -Dsonar.projectKey=automated-testing-mentoring-program-advanced"
                    }
                }
            }
        }
        stage('Quality gate') {
            steps {
                script {
                    def qualitygate = waitForQualityGate()
                    sleep(10)
                    if (qualitygate.status != 'OK') {
                        waitForQualityGate abortPipeline: true
                    }
                }
            }
        }
    }
}
