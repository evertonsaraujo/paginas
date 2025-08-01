import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Mail, 
  Linkedin, 
  Shield, 
  Network, 
  Cog, 
  Server, 
  Code, 
  Database,
  Monitor,
  Lock,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Languages,
  ChevronDown,
  Github,
  ExternalLink
} from 'lucide-react'
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'
import './App.css'

// Dados para os gráficos
const skillsData = [
  { name: 'Redes', value: 95, color: '#3b82f6' },
  { name: 'Segurança', value: 90, color: '#ef4444' },
  { name: 'Automação', value: 85, color: '#10b981' },
  { name: 'Monitoramento', value: 88, color: '#f59e0b' },
  { name: 'Sistemas', value: 92, color: '#8b5cf6' }
]

const experienceData = [
  { year: '2010', level: 30 },
  { year: '2012', level: 45 },
  { year: '2015', level: 60 },
  { year: '2018', level: 75 },
  { year: '2020', level: 85 },
  { year: '2023', level: 95 },
  { year: '2024', level: 100 }
]

const radarData = [
  { subject: 'Redes', A: 95, fullMark: 100 },
  { subject: 'Segurança', A: 90, fullMark: 100 },
  { subject: 'Automação', A: 85, fullMark: 100 },
  { subject: 'Monitoramento', A: 88, fullMark: 100 },
  { subject: 'Sistemas', A: 92, fullMark: 100 },
  { subject: 'Scripting', A: 80, fullMark: 100 }
]

const technologies = [
  { name: 'Zabbix', level: 95, category: 'Monitoramento' },
  { name: 'Wazuh', level: 90, category: 'Segurança' },
  { name: 'n8n', level: 85, category: 'Automação' },
  { name: 'Grafana', level: 88, category: 'Monitoramento' },
  { name: 'Python', level: 80, category: 'Scripting' },
  { name: 'Linux', level: 92, category: 'Sistemas' },
  { name: 'BGP', level: 95, category: 'Redes' },
  { name: 'Sophos', level: 85, category: 'Segurança' },
  { name: 'Veeam', level: 88, category: 'Backup' },
  { name: 'PowerShell', level: 82, category: 'Scripting' }
]

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Everton Araújo
            </motion.h1>
            <div className="hidden md:flex space-x-6">
              {['home', 'sobre', 'experiencia', 'habilidades', 'formacao', 'contato'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-blue-400 transition-colors ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {section === 'experiencia' ? 'Experiência' : 
                   section === 'formacao' ? 'Formação' : section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{ y }}
        >
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </motion.div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Everton Araújo
            </h1>
            <h2 className="text-2xl md:text-3xl mb-8 text-gray-300">
              Especialista em Automação de Processos e Cibersegurança
            </h2>
            <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-3xl mx-auto">
              Mais de 10 anos transformando processos manuais em soluções automatizadas, 
              com foco em segurança da informação e eficiência operacional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('sobre')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg"
              >
                Conhecer Mais
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('contato')}
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg text-lg"
              >
                Entrar em Contato
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <ChevronDown className="mx-auto animate-bounce text-blue-400" size={32} />
          </motion.div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sobre Mim
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Sou um profissional de TI com mais de 10 anos de experiência no mercado. 
                  Possuo sólida experiência em administração de redes e me especializei na 
                  implementação de ferramentas essenciais do Blue Team, destacando-me na 
                  configuração avançada de SIEM open source.
                </p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Tenho expertise na configuração de XDR, permitindo respostas automáticas 
                  a ameaças suspeitas. Sempre em busca de me manter atualizado às tendências 
                  do mercado, concluí recentemente o curso de especialização em Segurança da Informação.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-blue-600 text-white">10+ Anos de Experiência</Badge>
                  <Badge className="bg-purple-600 text-white">Blue Team</Badge>
                  <Badge className="bg-green-600 text-white">SIEM Specialist</Badge>
                  <Badge className="bg-red-600 text-white">XDR Expert</Badge>
                </div>
              </div>
              <div className="space-y-6">
                <Card className="bg-slate-700/50 border-slate-600">
                  <CardHeader>
                    <CardTitle className="text-blue-400 flex items-center gap-2">
                      <Shield size={24} />
                      Segurança da Informação
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Especialização em SIEM, XDR, Pentest e Hardening de sistemas.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-700/50 border-slate-600">
                  <CardHeader>
                    <CardTitle className="text-green-400 flex items-center gap-2">
                      <Cog size={24} />
                      Automação de Processos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Transformação de processos manuais em fluxos automatizados com n8n e APIs.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-700/50 border-slate-600">
                  <CardHeader>
                    <CardTitle className="text-purple-400 flex items-center gap-2">
                      <Network size={24} />
                      Administração de Redes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Expertise em BGP, VPNs, VLANs, Routing e Switching.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experiência Section */}
      <section id="experiencia" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experiência Profissional
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <Card className="bg-slate-800/50 border-slate-600">
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-400">CDT Network LTDA</CardTitle>
                    <CardDescription className="text-lg text-gray-300">
                      Analista de Infraestrutura Sênior • 2010 - Atual
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-3">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Network size={16} className="text-blue-400" />
                        <span>Administração de redes BGP, WAN, LAN, VPNs, VLANs</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Monitor size={16} className="text-green-400" />
                        <span>Monitoramento com Zabbix e painéis Grafana</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Shield size={16} className="text-red-400" />
                        <span>Implantação e administração de SIEM Wazuh</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Lock size={16} className="text-purple-400" />
                        <span>Hardening Windows/Linux e configuração XDR</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Code size={16} className="text-yellow-400" />
                        <span>Automação com Python, Bash, PowerShell</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Server size={16} className="text-indigo-400" />
                        <span>Administração Linux, Windows Server, Hyper-V</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6 text-center text-gray-300">
                  Evolução da Experiência
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={experienceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="year" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px'
                      }}
                    />
                    <Bar dataKey="level" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Habilidades Section */}
      <section id="habilidades" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Habilidades Técnicas
            </h2>
            
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-slate-700">
                <TabsTrigger value="overview">Visão Geral</TabsTrigger>
                <TabsTrigger value="technologies">Tecnologias</TabsTrigger>
                <TabsTrigger value="radar">Radar Skills</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-6 text-center text-gray-300">
                      Distribuição de Expertise
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={skillsData}
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}%`}
                        >
                          {skillsData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="space-y-6">
                    {skillsData.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                          <span className="text-gray-400">{skill.value}%</span>
                        </div>
                        <Progress value={skill.value} className="h-3" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="technologies" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-colors">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg text-blue-400">{tech.name}</CardTitle>
                          <CardDescription className="text-gray-400">{tech.category}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm text-gray-300">Proficiência</span>
                            <span className="text-sm text-gray-400">{tech.level}%</span>
                          </div>
                          <Progress value={tech.level} className="h-2" />
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="radar" className="mt-8">
                <div className="flex justify-center">
                  <ResponsiveContainer width="100%" height={400}>
                    <RadarChart data={radarData}>
                      <PolarGrid stroke="#374151" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#9CA3AF' }} />
                      <PolarRadiusAxis 
                        angle={90} 
                        domain={[0, 100]} 
                        tick={{ fill: '#9CA3AF', fontSize: 12 }}
                      />
                      <Radar
                        name="Skills"
                        dataKey="A"
                        stroke="#3B82F6"
                        fill="#3B82F6"
                        fillOpacity={0.3}
                        strokeWidth={2}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          border: '1px solid #374151',
                          borderRadius: '8px'
                        }}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Formação Section */}
      <section id="formacao" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Formação e Certificações
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-400 flex items-center gap-2">
                  <BookOpen size={24} />
                  Formação Acadêmica
                </h3>
                <div className="space-y-6">
                  <Card className="bg-slate-800/50 border-slate-600">
                    <CardHeader>
                      <CardTitle className="text-xl text-purple-400">Pós-Graduação em Cyber Security</CardTitle>
                      <CardDescription className="text-gray-300">
                        IDESP - Instituto Daryus de Ensino Superior Paulista • 2023
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  
                  <Card className="bg-slate-800/50 border-slate-600">
                    <CardHeader>
                      <CardTitle className="text-xl text-green-400">Tecnologia em Redes de Computadores</CardTitle>
                      <CardDescription className="text-gray-300">
                        Universidade Católica de Santos • 2011
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-xl font-semibold mb-4 text-yellow-400 flex items-center gap-2">
                    <Languages size={20} />
                    Idiomas
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Português</span>
                      <Badge className="bg-green-600">Nativo</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Inglês</span>
                      <Badge className="bg-blue-600">Intermediário</Badge>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-green-400 flex items-center gap-2">
                  <Award size={24} />
                  Certificações
                </h3>
                <div className="space-y-4">
                  {[
                    { name: 'ITIL Foundation Certificate in IT Service Management', year: '2012', id: '4435876.1054719' },
                    { name: 'XG Firewall – Sophos Certified Architect', year: '2018' },
                    { name: 'MCTS - Windows Server 2008 Active Directory', year: '2008', org: 'KA Solution' },
                    { name: 'Configuring and Troubleshooting Windows Server', year: '2008', org: 'KA Solution' },
                    { name: 'Active Directory Domain Services 6426', year: '2008', org: 'KA Solution' },
                    { name: 'Gestão de Mudanças: 4 práticas essenciais', year: '2015', org: 'EXIN' }
                  ].map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-colors">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold text-blue-400 mb-1">{cert.name}</h4>
                              <p className="text-sm text-gray-400">
                                {cert.org && `${cert.org} • `}{cert.year}
                              </p>
                              {cert.id && (
                                <p className="text-xs text-gray-500 mt-1">ID: {cert.id}</p>
                              )}
                            </div>
                            <Badge variant="outline" className="border-green-400 text-green-400">
                              {cert.year}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Vamos Conversar?
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                    Entre em Contato
                  </h3>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    Estou sempre aberto a discutir novas oportunidades, projetos interessantes 
                    ou simplesmente trocar ideias sobre tecnologia, automação e segurança da informação.
                  </p>
                  
                  <div className="space-y-4">
                    <motion.a
                      href="mailto:evertonsaraujo@gmail.com"
                      className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Mail className="text-blue-400 group-hover:text-blue-300" size={24} />
                      <div>
                        <p className="font-semibold text-white">E-mail</p>
                        <p className="text-gray-400">evertonsaraujo@gmail.com</p>
                      </div>
                      <ExternalLink className="ml-auto text-gray-400 group-hover:text-white" size={16} />
                    </motion.a>
                    
                    <motion.a
                      href="https://www.linkedin.com/in/it-everton-araujo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Linkedin className="text-blue-400 group-hover:text-blue-300" size={24} />
                      <div>
                        <p className="font-semibold text-white">LinkedIn</p>
                        <p className="text-gray-400">it-everton-araujo</p>
                      </div>
                      <ExternalLink className="ml-auto text-gray-400 group-hover:text-white" size={16} />
                    </motion.a>
                  </div>
                </div>
                
                <div className="text-center">
                  <motion.div
                    className="inline-block p-8 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full border border-blue-400/30"
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    <div className="p-6 bg-slate-800 rounded-full">
                      <Mail className="text-blue-400" size={48} />
                    </div>
                  </motion.div>
                  <h4 className="text-xl font-semibold mt-6 text-white">
                    Pronto para colaborar?
                  </h4>
                  <p className="text-gray-400 mt-2">
                    Vamos transformar ideias em soluções!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 border-t border-slate-700">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Everton Araújo. Desenvolvido com React e muito ☕
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

