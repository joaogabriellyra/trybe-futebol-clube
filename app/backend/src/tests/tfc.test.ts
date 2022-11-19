import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Users from '../database/models/Users';
import Teams from '../database/models/Teams';
import Matches from '../database/models/Matches';

import { teams, matches, findTeamById, token } from './mock';
import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando a rota de login', () => {
  afterEach(sinon.restore);
  it('testa se o acesso é negado ao tentar fazer login sem email', async () => {
    const { status, body } = await chai.request(app)
      .post('/login').send({
      password: '123456'
    })
    expect(status).to.be.equal(400);
    expect(body).to.be.deep.equal({ message: 'All fields must be filled'})
  })
  it('testa se o acesso é negado ao tentar fazer login sem password', async () => {
    const { status, body } = await chai.request(app)
      .post('/login').send({
      email: 'jgabriellyra@hotmail.com'
    })
    expect(status).to.be.equal(400);
    expect(body).to.be.deep.equal({ message: 'All fields must be filled'})
  })
  it('testa se é possível acessar com um email inválido', async () => {
    const { status, body } = await chai.request(app)
      .post('/login').send({
      email: 'jgabriellyra@hotmail.com',
      password: 'secret_admin'
    })
    expect(status).to.be.equal(401);
    expect(body).to.be.deep.equal({ message: 'Incorrect email or password' })
  })
  it('testa se é possível acessar com uma senha inválida', async () => {
    const { status, body } = await chai.request(app)
      .post('/login').send({
      email: 'admin@admin.com',
      password: '123456'
    })
    expect(status).to.be.equal(401);
    expect(body).to.be.deep.equal({ message: 'Incorrect email or password' })
  })
  it('testa se é possível acessar fornecendo um token', async () => {
    const { status, body } = await chai.request(app)
      .get('/login/validate').set('authorization', token)
  })
  
});

describe('Testando a rota de teams', () => {
  afterEach(sinon.restore);
  it('testa se vêm todos os times ao solicitar a função getTeams', async () => {
    sinon.stub(Teams, 'findAll').resolves(teams as [])
    const { status, body } = await chai.request(app)
      .get('/teams')
    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal(teams)
  })
  it('testa se vem um time baseado no seu respectivo id', async () => {
    sinon.stub(Teams, 'findOne').resolves(teams[3] as Teams)
    const { status, body } = await chai.request(app)
      .get('/teams/4')
    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal(teams[3])
  })
  
});

describe('Testando a rota de matchs', () => {
  afterEach(sinon.restore);
  it('testa se vêm todas as partidas', async () => {
    sinon.stub(Matches, 'findAll').resolves(matches as [])
    const { status, body } = await chai.request(app)
    .get('/matches')
    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal(matches)
  })
  it('testa se vêm todas as partidas finalizadas', async () => {
    sinon.stub(Matches, 'findAll').resolves(matches as [])
    const { status, body } = await chai.request(app)
    .get('/matches?inProgress=false')
    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal(matches)
  })
  it('testa se é possível encerrar uma partida', async () => {
    sinon.stub(Matches, 'update')
    const { status, body } = await chai.request(app)
    .patch('/matches/4/finish');
    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal({
      message: 'Finished'
    })
  })
  it('testa se é possível atualizar uma partida', async () => {
    sinon.stub(Matches, 'update')
    sinon.stub(Matches, 'findOne').resolves(teams[4] as Teams)
    const { status, body } = await chai.request(app)
    .patch('/matches/48').send(
      {
        homeTeamGoals: 3,
        awayTeamGoals: 1
      }
    );
    expect(status).to.be.equal(200);
  })
  
});


