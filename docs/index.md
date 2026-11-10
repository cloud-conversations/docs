# Cloud Conversations

**Welcome to Cloud Conversations!**

Cloud Conversations lets you build experiment environments on [Chameleon](https://www.chameleoncloud.org) by describing them in plain English. Tell it the hardware and software you need, review the description it writes, and approve it. Cloud Conversations reserves the hardware, boots your instance, installs your software, and checks the result for you. You can also ask it questions about Chameleon, answered from Chameleon's documentation.

Every description includes a **rubric**: a list of checks Cloud Conversations writes from your request, such as the CPU, memory, GPU, operating system, and each package you asked for. After the build, it runs each check on your instance. The build passes only if every check passes.

Ready to try it? Head to [app.cloudconversations.org](https://app.cloudconversations.org), or start with our [Getting Started](getting-started.md) guide.

## Current limitations

Cloud Conversations is in preview. Keep the following in mind:

- **Chameleon only.** You log in with your Chameleon account, and experiments run in your Chameleon projects. Keep an eye out for support for other testbeds in the future.
- **Account approval.** An admin must approve your account before you can use it.
- **One instance per experiment.** Each build boots one instance with one public address. Multi-node deployments are not supported yet. Cloud Conversations does not create networks, routers, security group rules beyond SSH, storage volumes, object storage containers, or shared file systems.
- **Software.** Cloud Conversations can install system packages, Python and pip packages, Node and npm packages, and Docker containers. It can clone a git repository you give a URL for, but it does not run any scripts in the repository yet. It does not run your own commands on the instance. Install anything else yourself after the build.
- **One build at a time** per experiment.
- **Usage limits.** You have a daily limit on messages, and limits on how many builds and active experiments you can have at once. See yours under **Usage** on your **Profile** page.

The following limitations apply when you use Cloud Conversations with Chameleon:

- **Sites.** Bare metal nodes are available at CHI@TACC, CHI@UC, and CHI@NCAR. VMs are available at CHI@TACC and KVM@TACC. CHI@Edge is not supported yet.
- **SSH only on VMs.** SSH is the only port on a VM that accepts connections from outside. Reach other services over an SSH tunnel.
- **Documentation answers** come only from the Chameleon Docs, the Python CHI Docs, and the Chameleon Blog.
