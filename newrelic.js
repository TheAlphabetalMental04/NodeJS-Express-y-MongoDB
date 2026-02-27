'use strict';

/**
 * Configuración de New Relic para aplicaciones Node.js
 * Documentación oficial:
 * https://docs.newrelic.com/docs/apm/agents/nodejs-agent/
 */

exports.config = {
  /**
   * Nombre de la aplicación que aparecerá en New Relic
   */
  app_name: ['Mi API Node + Express + MongoDB'],

  /**
   * Licencia de New Relic
   * Recomendado usar variables de entorno
   */
  license_key: process.env.NEW_RELIC_LICENSE_KEY || 'TU_LICENSE_KEY_AQUI',

  /**
   * Nivel de logs del agente
   * Opciones: fatal, error, warn, info, debug, trace
   */
  logging: {
    level: 'info'
  },

  /**
   * Atributos personalizados
   */
  attributes: {
    enabled: true
  },

  /**
   * Configuración del agente
   */
  agent_enabled: true,

  /**
   * Configuración de errores
   */
  error_collector: {
    enabled: true,
    ignore_status_codes: [404]
  },

  /**
   * Configuración de transacciones
   */
  transaction_tracer: {
    enabled: true,
    record_sql: 'obfuscated', // No expone datos sensibles
    explain_threshold: 500
  },

  /**
   * MongoDB (instrumentación automática)
   */
  datastore_tracer: {
    instance_reporting: true,
    database_name_reporting: true
  },

  /**
   * Distribución de trazas
   */
  distributed_tracing: {
    enabled: true
  },

  /**
   * Entorno de despliegue
   */
  environment: process.env.NODE_ENV || 'development'
};
