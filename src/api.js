export class Api {
  constructor(client) {
    this.client = client
  }

  async joinWaitlist(email, ig) {
    await this.client.post('/join-waitlist', { email, ig })
  }
}
