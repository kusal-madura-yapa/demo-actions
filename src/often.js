module.exports = async ({github, owner, repo, workflow_id}) => {
    
    const workflowParts = workflow_id.split('/')
    console.log(`${JSON.stringify(workflowParts)}`)
    const workflow = workflowParts[workflowParts.length-1]
    
    console.log(`Running on repo [${owner}/${repo}] with workflow_id: [${workflow}]`)
    
    const runs = await github.rest.actions.listWorkflowRuns({
        owner,
        repo,
        workflow_id
    });
                
    console.log(``)
    console.log(`${JSON.stringify(runs)}`)
    console.log(``)
    console.log(`Found [${runs.length}] workflow runs`)

  }