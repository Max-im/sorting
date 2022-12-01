import inquirer from 'inquirer';

export class CliService {
    public async list<T>(message: string, choices: {[key: string]: T}) {
        const { result } = await inquirer.prompt([
            {
                message,
                type: 'list',
                name: 'result',
                choices: Object.keys(choices)
            }
        ])
        
        return choices[result];
    }
}
